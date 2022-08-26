export type Page = {key:number, url:string, name:string};
export type Profile = {key:number, url:string, name:string, email:string, role:string};

export type Result = {code: number, msg: string, data?:any};

export type Path = "왼쪽" | "중앙" | "오른쪽";

export type ObjectCategory = "bicycle" | "motorcycle" | "kickboard";
export type RiskCategory = 0 | 1 | 2;

export type Object = {
    category : ObjectCategory,
    probability : number,
    center : [number, number],
    width : number,
    height: number,
    risk : RiskCategory,
};

export type RawImage = {
    captured: Date,
    width: number,
    height: number,
    risked: Object[],
    src: string,
    id : number,
    title: string,
    data: string, //b64bytes string!
};

export type Log = {
    id: number,
    src: string,
    recorded: Date,
    objects: Object[],
    risked: number[],
    risk: RiskCategory,
};

export type Frame = {
    id       : number,
    captured : Date,
};

export type RawVideo = {
    mode       : "RGB" | "BGR",
    title      : string,
    format     : "jpeg" | "JPEG",
    duration   : {[key: string] : Date},
    width      : number,
    height     : number,
    frames     :Frame[],
};

