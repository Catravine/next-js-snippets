import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {

  async function createSnippet(formData: FormData) {
    // means this is a server action!
    'use server';
    // validate inputs
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    // create a new record in the db
    const snippet = await db.snippet.create({
      data: { title, code }
    });
    // Redirect back to 'home'
    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bod m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input 
            name="title"
            className="forder rounded p-2 w-full"
            id="title"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea 
            name="code"
            className="forder rounded p-2 w-full"
            id="code"
          />
        </div>
      </div>
      <button type="submit" className="rounded p-2 bg-blue-200">
        Create
      </button>
    </form>
  )
}