import Tile from "./Tile";
import ReactSplit, { SplitDirection } from "@devbookhq/splitter";

const Container = () => {
  return (
    <>
      <ReactSplit
        direction={SplitDirection.Vertical}
        // minWidths={[100]} // In pixels.
      >
        <Tile />
        <ReactSplit
          direction={SplitDirection.Horizontal}
        //   minHeights={[100]} // In pixels.
        >
          <Tile />
          <Tile />
        </ReactSplit>
      </ReactSplit>
    </>
  );
};

export default Container;
