"use client";

export default function Home() {
  const handleCreateGame = () => {
    console.log("Create game");
  };
  return (
    <main>
      <button className="p-4 rounded bg-orange-300" onClick={handleCreateGame}>
        Add game
      </button>
    </main>
  );
}
