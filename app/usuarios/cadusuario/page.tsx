import Link from 'next/link';

export default function Cadusuario () {
    return(
        <>
           <h1>Cadastro</h1>
           <p>Insira as informações do usuário</p>
           
           <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
}