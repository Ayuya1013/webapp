export function App() {
  return (
    <div>
      <h1>Stand up 勉強App Login page</h1>
      <div className="min-h-screen flex items-center justify-center bg-purple-800 w-full flex-col px-2">
        <div className="flex flex-col gap-18">
          <div className="flex flex-col">
            <label>username</label>
            <input id="username" type="text" placeholder="YuyaAkamatsu" />
          </div>
          <div className="flex flex-col">
            <label>password</label>
            <input id="password" type="text" placeholder="password" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
