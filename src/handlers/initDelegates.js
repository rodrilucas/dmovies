import { delegate } from "../core/delegate";
import { clickDelegates } from "../delegates/clickDelegates";
import { focusInDelegates } from "../delegates/focusDelegates";
import { inputDelegates } from "../delegates/inputDelegates";
import { submitDelegates } from "../delegates/submitDelegates";

delegate("click", clickDelegates);
delegate("input", inputDelegates);
delegate("focusin", focusInDelegates);
delegate("submit", submitDelegates);
