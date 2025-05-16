import { delegate } from "../core/delegate";
import { clickDelegates } from "../delegates/clickDelegates";
import { focusInDelegates } from "../delegates/focusDelegate";
import { inputDelegates } from "../delegates/inputDelegates";
import { submitDelegate } from "../delegates/submitDelegate";

delegate("click", clickDelegates);
delegate("input", inputDelegates);
delegate("focusin", focusInDelegates);
delegate("submit", submitDelegate);
