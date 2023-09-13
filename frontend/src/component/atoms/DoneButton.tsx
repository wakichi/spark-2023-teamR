import { Button } from "@chakra-ui/react";

const handleTaskDone = () => {
  // タスクの状態を変更するPOST
  console.log("タスクの状態変更");
};

const DoneButton = () => {
  return (
    <Button
      onClick={handleTaskDone}
      bg={"blue.500"}
      textColor={"white"}
      _hover={{ opacity: 0.8 }}
    >
      Done!
    </Button>
  );
};

export { DoneButton };
