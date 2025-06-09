import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './types/usuario.type';
import { CrearUsuarioDto } from './dtos/create-usuario.dto';
import { ActualizarUsuatioDto } from './dtos/update-usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}


    @Get()
    allCats(): Usuario[] {
        return this.usuariosService.todosUsuarios();
    }


    @Get(':id')
    obtenerId(@Param('id', new ParseIntPipe()) id: number): Usuario | undefined {
        return this.usuariosService.obtenerId(id)
    }
    
    @Post() 
    creacion(@Body() crearUsuarioDto: CrearUsuarioDto): Usuario {
        return this.usuariosService.creacion(crearUsuarioDto)

    }

    @Put(':id')
    actualizar(@Param('id', new ParseIntPipe()) id: number, @Body() updateCatDto: ActualizarUsuatioDto,): string {
        return this.usuariosService.actualizar(id, updateCatDto);

    }
}


