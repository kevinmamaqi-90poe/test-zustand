import { useUserStore } from "./state/state";

const TestVarComp: React.FC = () => {
  // Subscribe to user with id 1's name
  const firstName = useUserStore((state) => state.byId["1"].name);
  console.log("TestVarComp rendered");

  return <div>First Name: {firstName}</div>;
};

const TestVarComp2: React.FC = () => {
  // Subscribe to user with id 2's name
  const surname = useUserStore((state) => state.byId["2"].name);
  const updateUser = useUserStore((state) => state.updateUser);

  const handleUpdate = () => {
    updateUser({
      id: "2",
      name: "Updated Jane Doe",
      email: "",
    });
  };

  console.log("TestVarComp2 rendered");
  return (
    <div>
      <button onClick={handleUpdate}>Update Name</button>
      <div>Surname: {surname}</div>
    </div>
  );
};

function App() {
  return (
    <>
      <TestVarComp />
      <TestVarComp2 />
    </>
  );
}

export default App;
