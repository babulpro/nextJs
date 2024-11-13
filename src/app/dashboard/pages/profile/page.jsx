"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("profilePicture", file);
    formData.append("email", "user@example.com"); // Include email or any identifier

    const response = await fetch("/api/upload", {
      method: "PATCH",
      body: formData,
    });

    if (!response.ok) {
        const errorText = await response.text(); // Get the response text if not JSON
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

    const json = await response.json();

    if (json.status === "ok") {
      alert("Profile picture updated successfully!");
      router.replace("/dashboard");
    } else {
      alert(json.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} required />
      <button type="submit">Upload</button>
    </form>
  );
}
