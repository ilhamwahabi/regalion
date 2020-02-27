export type TLoadingState = boolean;

const loadingReducer = (
  state = false,
  { type }: { type: string }
): TLoadingState => {
  switch (type) {
    case "START_LOADING":
      return true;
    case "FINISH_LOADING":
      return false;
  }
  return state;
};

export default loadingReducer;
