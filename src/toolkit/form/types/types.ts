import {FormElementConfigs} from "./element-types";
import {FormButtonConfig} from "./button-types";

export type FormConfig = {
  elements: FormElementConfigs;
  buttons?: FormButtonConfig[];
}



