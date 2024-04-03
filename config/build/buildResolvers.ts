import {Configuration} from "webpack";
import {BuildOptions} from "./types";
import path from "path";

export function buildResolvers({paths}: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': paths.src,
            '@assets': path.resolve(paths.public, 'assets')
        }
    }
}