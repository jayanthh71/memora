"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Tiptap({ content }: { content: string }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editorProps: {
      attributes: {
        class:
          "rounded-md border bg-secondary p-1.5 font-body text-lg focus:outline-none w-96",
      },
    },
  });

  return <EditorContent editor={editor} />;
}
