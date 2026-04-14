"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("reviewme") // pastikan nama tabel kamu benar
        .select("*");

      if (error) {
        console.error("ERROR:", error);
      } else {
        console.log("DATA:", data);
        setData(data);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Test Supabase</h1>

      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.comment}</p>
          <p>{item.rating}</p>
        </div>
      ))}
    </div>
  );
}