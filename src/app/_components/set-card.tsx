"use client";

import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { api } from "~/trpc/react";
import { FiTrash2 } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { useEffect, useState } from "react";

interface SetCardProps {
  id: number;
  name: string;
  currentStudySetId?: number | null;
}

export default function SetCard({ id, name, currentStudySetId }: SetCardProps) {
  const utils = api.useUtils();
  const [showDeleteError, setShowDeleteError] = useState(false);

  const deleteMutation = api.flashCard.deleteStudySet.useMutation({
    onSuccess: () => {
      utils.flashCard.getStudySets.invalidate();
      setShowDeleteError(false);
    },
  });

  useEffect(() => {
    if (!showDeleteError) return;
    const timeoutId = setTimeout(() => {
      setShowDeleteError(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [showDeleteError]);

  const handleDelete = async () => {
    console.log(currentStudySetId)
    if (currentStudySetId != null && id === currentStudySetId) {
      setShowDeleteError(true);
      return;
    }

    if (!confirm(`Delete "${name}"?`)) return;
    await deleteMutation.mutateAsync({ id });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:shadow-sm transition-all">
        <p className="font-medium text-gray-800">{name}</p>

        <Button
          variant="ghost"
          onClick={handleDelete}
          className="text-red-500 hover:text-red-600"
        >
          <FiTrash2 size={18} />
        </Button>
      </div>

      {showDeleteError ? (
        <Alert variant="destructive" className="border-red-200 bg-red-50">
          <FiAlertTriangle />
          <AlertTitle>Action blocked</AlertTitle>
          <AlertDescription>
            You cannot delete the current study set you are in.
          </AlertDescription>
        </Alert>
      ) : null}
    </div>
  );
}
