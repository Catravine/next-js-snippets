'use client';

import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetEditFormProps {
  snippet: Snippet 
}

export default function SnippetEditForm(props: SnippetEditFormProps) {

  const [code, setCode] = useState(props.snippet.code)

  const handleEditorChange = (value: string = "") => {
    setCode(value)
  } 

  const editShippetAction = actions.editSnippet.bind(null, props.snippet.id, code);

  return (
    <div>
      <Editor 
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={props.snippet.code}
        options={{ // minimap only useful for longer files
          minimap: { enabled: false }
        }}
        onChange={handleEditorChange}
      />
      <form action={editShippetAction}>
        <button type="submit" className="p-2 border rounded">Save</button>
      </form>
    </div>
  )
}