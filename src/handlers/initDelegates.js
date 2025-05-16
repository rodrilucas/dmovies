import { delegate } from "../core/delegate";
import { clickDelegates } from "../delegates/clickDelegates";
import { focusDelegates } from "../delegates/focusDelegate";
import { inputDelegates } from "../delegates/inputDelegates";
import { submitDelegate } from "../delegates/submitDelegate";

delegate("click", clickDelegates);
delegate("input", inputDelegates);
delegate("focusin", focusDelegates);
delegate("submit", submitDelegate);
