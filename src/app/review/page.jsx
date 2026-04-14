"use client";

import { useState } from "react";
import { starIcons } from "../assets";
import { supabase } from "@/lib/supabase";

export default function ReviewPage() {
  const [form, setForm] = useState({
    name: "",
    comment: "",
    rating: 5,
  });
  const avatars = Array.from(
    { length: 18 },
    (_, i) => `/avatar/client-${i + 1}.png`,
  );

  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [score, setScore] = useState(0); // 1–10
  const rating = score / 2;
  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // submit ke supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("reviewme").insert([
      {
        name: form.name,
        comment: form.comment,
        rating: rating,
        image: selectedAvatar, // default dulu
      },
    ]);

    if (error) {
      console.error(error);
      alert("Gagal kirim review");
    } else {
      setSuccess(true);
      setForm({ name: "", comment: "", rating: 5 });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-zinc-900 p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md flex flex-col gap-4"
      >
        <h1 className="text-xl font-semibold text-center text-yellow-500 dark:text-red-200">
          Write a Review
        </h1>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded border dark:text-red-200"
        />

        {/* COMMENT */}
        <textarea
          name="comment"
          placeholder="Your experience..."
          value={form.comment}
          onChange={handleChange}
          required
          className="p-3 rounded border dark:text-red-200"
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500"></label>

          <input
            type="range"
            min="1"
            max="10"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            style={{
              "--value": `${(score / 10) * 100}%`,
            }}
            className="w-full custom-slider flex flex-col gap-2 mt-4 "
          />
        </div>

        <div className="flex gap-2 text-3xl text-yellow-500 dark:text-red-300">
          {Array.from({ length: 5 }).map((_, i) => {
            const value = i + 1;

            if (value <= Math.floor(rating)) {
              return <span key={i}>{starIcons[0]}</span>; // full
            } else if (value - 0.5 === rating) {
              return <span key={i}>{starIcons[1]}</span>; // half
            } else {
              return (
                <span key={i} className="text-gray-400">
                  {starIcons[0]}
                </span>
              );
            }
          })}
        </div>
        
        <div className="flex flex-col items-center mt-4 gap-2">
          {/* TITLE */}
          <h1 className="text-sm font-medium text-center text-yellow-500 dark:text-red-200">
            Select Your Avatar
          </h1>

          {/* AVATARS */}
          <div className="flex gap-3 flex-wrap justify-center">
            {avatars.map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                onClick={() => setSelectedAvatar(avatar)}
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full cursor-pointer border-2 transition ${
                  selectedAvatar === avatar
                    ? "border-yellow-500 dark:border-red-300 scale-[1.2]"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading || rating === 0}
          className={`py-2 rounded transition ${
            loading || rating === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 text-black hover:opacity-80"
          }`}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>

        {success && (
          <p className="text-green-500 text-center">
            Review submitted successfully
          </p>
        )}
      </form>
    </div>
  );
}
