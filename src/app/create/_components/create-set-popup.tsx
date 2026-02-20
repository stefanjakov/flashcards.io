"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "~/components/ui/popover";
import { api } from "~/trpc/react";

export default function CreateSetPopup() {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const utils = api.useUtils();
  const createMutation = api.flashCard.createStudySetFromMarkdown.useMutation({
    onSuccess: () => {
      void utils.flashCard.getStudySets.invalidate();
      void utils.flashCard.getCurrentStudySet.invalidate();
      setErrorMessage(null);
      setOpen(false);
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  const onDrop = useCallback(
    (files: File[]) => {
      if (files.length === 0) return;
      setErrorMessage(null);
      const file = files[0];
      if (!file) return;

      void (async () => {
        try {
          const markdown = await file.text();
          await createMutation.mutateAsync({ markdown });
        } catch (error) {
          setErrorMessage(
            error instanceof Error ? error.message : "Failed to read the file.",
          );
        }
      })();
    },
    [createMutation],
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: { "text/markdown": [".md", ".markdown"] },
    });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="bg-brand-secondary border-brand-secondary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary hover:border-brand-secondary border-2">
          Create Set
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-96 p-4">
        <PopoverHeader className="gap-2">
          <PopoverTitle className="text-brand-primary text-base">
            Create From Markdown
          </PopoverTitle>
          <p className="text-muted-foreground text-sm">
            Drop a markdown file in the style of term: definition, with a title.
          </p>
        </PopoverHeader>

        <div
          {...getRootProps()}
          className={[
            "mt-4 cursor-pointer rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors",
            isDragActive ? "border-brand-primary bg-brand-primary/10" : "",
            isDragReject ? "border-red-400 bg-red-50" : "border-gray-200",
            createMutation.isPending ? "pointer-events-none opacity-70" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <input {...getInputProps()} />
          {createMutation.isPending ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="text-brand-primary h-5 w-5 animate-spin" />
              <p className="text-sm font-medium text-gray-800">
                Creating your study set...
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm font-medium text-gray-800">
                {isDragActive
                  ? "Release to upload"
                  : "Drag and drop a file here"}
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                .md or .markdown, one file
              </p>
            </>
          )}
        </div>

        {errorMessage ? (
          <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
