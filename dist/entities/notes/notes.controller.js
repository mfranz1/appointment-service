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
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const notes_service_1 = require("./notes.service");
const create_note_dto_1 = require("./dto/create-note.dto");
const update_note_dto_1 = require("./dto/update-note.dto");
let NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
    }
    async create(res, createNoteDto) {
        try {
            const note = await this.notesService.create(createNoteDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Note has been created successfully',
                note
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Note not created',
                status: 400
            });
        }
    }
    async findAll() {
        return this.notesService.findAll();
    }
    async findOne(res, id) {
        const note = await this.notesService.findOne(id);
        if (!note) {
            throw new common_1.NotFoundException('Note does not exist');
        }
        else {
            return res.status(common_1.HttpStatus.OK).json(note);
        }
    }
    async update(res, id, updateNoteDto) {
        try {
            const note = await this.notesService.update(id, updateNoteDto);
            if (!note) {
                throw new common_1.NotFoundException('Note does not exist');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Note has been successfully updated',
                note
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_GATEWAY).json({
                message: 'Error: Note not updated',
                status: 400
            });
        }
    }
    async delete(res, id) {
        if (!id) {
            throw new common_1.NotFoundException('Note ID does not exist');
        }
        const Note = await this.notesService.deleteNote(id);
        if (!Note) {
            throw new common_1.NotFoundException('Note does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Note has been deleted',
            Note
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_note_dto_1.CreateNoteDTO]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_note_dto_1.UpdateNoteDTO]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "delete", null);
NotesController = __decorate([
    common_1.Controller('notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesServices])
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map