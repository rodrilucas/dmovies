import { delegate } from "../core/delegate";
import { clickDelegates } from "./clickDelegates";
import { focusInDelegates } from "./focusDelegates";
import { inputDelegates } from "./inputDelegates";
import { submitDelegates } from "./submitDelegates";

delegate("click", clickDelegates);
delegate("input", inputDelegates);
delegate("focusin", focusInDelegates);
delegate("submit", submitDelegates);
