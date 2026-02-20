"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "~/components/ui/popover";

export default function CreateSetPopup() {
  const [open, setOpen] = useState(false);

  const onDrop = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setOpen(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: { "text/markdown": [".md", ".markdown"] },
    });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="bg-brand-secondary border-2 border-brand-secondary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary hover:border-brand-secondary">
          Create Set
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-96 p-4">
        <PopoverHeader className="gap-2">
          <PopoverTitle className="text-base text-brand-primary">
            Create From Markdown
          </PopoverTitle>
          <p className="text-sm text-muted-foreground">
            Drop a markdown file in the style of term: definition, with a title.
          </p>
        </PopoverHeader>

        <div
          {...getRootProps()}
          className={[
            "mt-4 cursor-pointer rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors",
            isDragActive ? "border-brand-primary bg-brand-primary/10" : "",
            isDragReject ? "border-red-400 bg-red-50" : "border-gray-200",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <input {...getInputProps()} />
          <p className="text-sm font-medium text-gray-800">
            {isDragActive ? "Release to upload" : "Drag and drop a file here"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            .md or .markdown, one file
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
