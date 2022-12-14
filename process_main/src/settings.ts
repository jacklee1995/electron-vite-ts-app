import * as path from "path";
import * as os from "os";
import { app } from "electron";
import { setRuntimeLogger } from "./logger";



// Application Name
const APP_NAME = "elApp";

let APP_BASE;

// APP Icon Path
let APP_ICON_PATH: string;
if(process.env.NODE_ENV === "development"){
  APP_BASE = path.resolve(path.resolve(__dirname, "../"), "../");
}
else{
  APP_BASE = app.getAppPath()
}

let BUILD_DIR = path.join(APP_BASE, "build");

APP_ICON_PATH = process.env.NODE_ENV === "development"
    ? path.join(path.join(BUILD_DIR, "assets"),"jcstudio_256x256.ico")
    : path.join(path.join(APP_BASE, "assets"),"jcstudio_256x256.ico")


// VITE ENV 将用于获取开发模式下调试时的端口
const VITE_ENVS_DIR = path.join(APP_BASE, "VITE_ENVS");

// LOGS
const LOG_DIR = app.getPath("logs");
const APP_LOG_PATH = path.join(LOG_DIR, "app.log");
const APP_DATAFILE_LOG_PATH = path.join(LOG_DIR, "datefile.log");
const NET_LOG_PATH = path.join(LOG_DIR, "net.log");


// System user AppData
const APP_DATAS_BASE_DIR = path.join(
  path.join(path.join(os.homedir(), "AppData"), "Roaming"),
  APP_NAME
);
// Log File Save Directory
app.setAppLogsPath(path.join(APP_DATAS_BASE_DIR, "logs"));

// logger
const logger = setRuntimeLogger("info");

// Database - SQLite File
const DB_ABSOLUTE_PATH = path.join(APP_DATAS_BASE_DIR, "rundata.sqlite3");

const DEFAULT_DATA_HOME = path.join(APP_DATAS_BASE_DIR, "notes");

const WINDOW_PORT = {
  index: 5173,
  loading: 5174,
};

const RENDER_BUILDS_DIR = path.join(APP_BASE, "renders");

const RENDER_APP_PATH = {
  loading: path.join(RENDER_BUILDS_DIR, "loading"),
  index: path.join(RENDER_BUILDS_DIR, "index"),
};

const RENDER_HTML_PATH = {
  loading: path.join(RENDER_APP_PATH.loading, "index.html"),
  index: path.join(RENDER_APP_PATH.index, "index.html"),
};

logger.info("-----------------------------");
logger.warn(`APP_PATH = ${APP_BASE}`)
logger.warn(`BUILD_DIR = ${BUILD_DIR}`)
logger.warn(`APP_ICON_PATH = ${APP_ICON_PATH}`)
logger.info("-----------------------------");

export {
  APP_NAME,
  // BASE_DIR,
  VITE_ENVS_DIR,
  LOG_DIR,
  APP_DATAFILE_LOG_PATH,
  NET_LOG_PATH,
  APP_DATAS_BASE_DIR,
  APP_LOG_PATH,
  logger,
  DB_ABSOLUTE_PATH,
  APP_ICON_PATH,
  DEFAULT_DATA_HOME,
  WINDOW_PORT,
  RENDER_HTML_PATH,
};
