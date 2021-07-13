var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deposition_show_details } from './../../deposition/show/details';
export const deposition_show_files = (token, sandbox, record_id, verbose = false) => __awaiter(void 0, void 0, void 0, function* () {
    const deposition = yield deposition_show_details(token, sandbox, record_id, 'deposition', verbose);
    return deposition.files.map((file) => {
        return file.filename;
    });
});