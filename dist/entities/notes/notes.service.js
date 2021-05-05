"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesServices = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const note_schema_1 = require("./schema/note.schema");
let NotesServices = class NotesServices {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async create(createNoteDto) {
        const createdNote = new this.noteModel(createNoteDto);
        return createdNote.save();
    }
    async findAll() {
        return this.noteModel.find().exec();
    }
    async findOne(id) {
        return this.noteModel.findById(id).exec();
    }
    async update(id, updateNoteDto) {
        const updatedNote = await this.noteModel.findByIdAndUpdate({ _id: id }, updateNoteDto);
        if (!updatedNote) {
            throw new common_1.NotFoundException(`Note #${id} not found.`);
        }
        else {
            return updatedNote;
        }
    }
    async deleteNote(id) {
        const deletedNote = await this.noteModel.findByIdAndRemove(id);
        return deletedNote;
    }
};
NotesServices = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NotesServices);
exports.NotesServices = NotesServices;
//# sourceMappingURL=notes.service.js.map