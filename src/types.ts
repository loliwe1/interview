type ModuleType = "module1" | "module2" | "module3";

type Module1Type = {
  firstParam: string;
}

type Module2Type = {
  secondParam: number;
}

type Module3Type = {
  thirdParam: boolean; 
}

type ModuleParamsMap = {
  module1: Module1Type;
  module2: Module2Type;
  module3: Module3Type;
};

type DistributeModuleParams  = ???;

const getModuleParam = ({ module, params }: DistributeModuleParams<ModuleType>) => {
  if (module === "module1") {
   params.firstParam
  }

  if (module === "module2") {
    params.secondParam
  }

  if (module === "module3") {
    params.thirdParam
  }
};