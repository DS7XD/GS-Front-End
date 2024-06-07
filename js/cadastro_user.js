document.addEventListener("DOMContentLoaded", function() {
    // Adiciona estilos dinamicamente
    const style = document.createElement('style');
    style.innerHTML = `
        .button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
        }
        #senha-error, #form-error {
            color: red;
            display: none;
        }
    `;
    document.head.appendChild(style);

    // Função para validar a senha
    function validarSenha() {
        var senha = document.getElementById("senha").value;
        var confirmaSenha = document.getElementById("confirma-senha").value;

        if (senha !== confirmaSenha) {
            document.getElementById("senha-error").style.display = "block";
            return false;
        } else {
            document.getElementById("senha-error").style.display = "none";
            return true;
        }
    }

    // Função para validar o formulário
    window.validarFormulario = function() {
        var nome = document.getElementById("nome").value;
        var dataNascimento = document.getElementById("dataNascimento").value;
        var celular = document.getElementById("celular").value;
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;
        var confirmaSenha = document.getElementById("confirma-senha").value;

        if (!nome || !dataNascimento || !celular || !email || !senha || !confirmaSenha) {
            document.getElementById("form-error").style.display = "block";
            return false;
        } else {
            document.getElementById("form-error").style.display = "none";
        }

        if (validarSenha()) {
            document.getElementById("cadastroForm").submit();
            window.location.href = 'telalogin.html';
        }
    }

    // Função para aplicar máscara no campo de celular
    document.getElementById("celular").addEventListener("keydown", function() {
        aplicarMascara(this, 'celular');
    });

    function aplicarMascara(campo, formato) {
        if (formato === 'celular') {
            const separador1 = '(';
            const separador2 = ')';
            const separador3 = ' ';
            const separador4 = '-';
            const tamanho1 = 0;
            const tamanho2 = 3;
            const tamanho4 = 10; 

            if (campo.value.length === tamanho1) {
                campo.value += separador1;
            } else if (campo.value.length === tamanho2) {
                campo.value += separador2 + separador3;
            } else if (campo.value.length === tamanho4) {
                campo.value += separador4;
            }
        }
    }
});
