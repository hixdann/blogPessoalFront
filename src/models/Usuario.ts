import Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  postagem?: Postagem | null; // O símbolo de interrogação ( ? ) ao lado do atributo postagem indica que o preenchimento dos dados deste atributo é opcional. e o (|) => Significa OU, podendo ter duas tipagens
}