import {systemSlice} from "../slices/system-slice/system-slice";

export const rtkSlices = {
  system: systemSlice,
}

export const reducer = {
  systemState: rtkSlices.system.reducer,
}
