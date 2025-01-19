"use client";

import handleCreatePod from "@/lib/handlers/handleCreatePod";
import { FormFields } from "@/lib/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function NewPod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await handleCreatePod(data);
  };

  return (
    <div className="mx-auto flex min-w-full max-w-7xl flex-col items-center gap-8 p-8 text-text">
      <h1 className="font-heading text-4xl">Create a new Pod</h1>
      <form
        className="flex h-5/6 w-5/6 flex-col items-center justify-between rounded-xl border-2 border-accent bg-secondary p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-3/5 space-y-5 p-4">
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Pod Name:</h1>
            <input
              className="min-w-96 rounded-md border bg-secondary p-1.5 font-body text-xl focus:outline-none"
              type="text"
              autoFocus={true}
              maxLength={30}
              {...register("name", {
                required: "Pod name is required",
                maxLength: 30,
              })}
            />
          </div>
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Description:</h1>
            <textarea
              className="min-w-96 resize-none rounded-md border bg-secondary p-1.5 font-body text-lg focus:outline-none"
              maxLength={80}
              rows={2}
              {...register("description", {
                required: "Pod description is required",
                maxLength: 80,
              })}
            />
          </div>
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Due Date:</h1>
            <input
              className="min-w-96 rounded-md border bg-secondary p-1.5 font-body text-lg focus:outline-none"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              {...register("dueDate", {
                required: "Due date is required",
                validate: (value) => {
                  return new Date(value).getTime() >= new Date().getTime()
                    ? true
                    : "Due date must be in the future";
                },
              })}
            />
          </div>
          <div className="flex min-w-full items-start justify-between gap-3">
            <h1 className="font-body text-2xl font-bold">Content:</h1>
            <textarea
              className="min-w-96 resize-none rounded-md border bg-secondary p-1.5 font-body text-lg focus:outline-none"
              rows={4}
              {...register("content", { required: "Pod content is required" })}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pb-4">
          {errors.name && (
            <div className="font-body text-lg font-bold text-red-500">
              {errors.name.message}
            </div>
          )}
          {!errors.name && errors.description && (
            <div className="font-body text-lg font-bold text-red-500">
              {errors.description.message}
            </div>
          )}
          {!errors.name && !errors.description && errors.dueDate && (
            <div className="font-body text-lg font-bold text-red-500">
              {errors.dueDate.message}
            </div>
          )}
          {!errors.name &&
            !errors.description &&
            !errors.dueDate &&
            errors.content && (
              <div className="font-body text-lg font-bold text-red-500">
                {errors.content.message}
              </div>
            )}
          <button
            className="w-40 rounded-lg bg-accent px-3 py-1.5 font-body text-lg font-bold disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Pod"}
          </button>
        </div>
      </form>
    </div>
  );
}
