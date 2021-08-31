import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';
import { Observable } from 'rxjs/Rx';
import { SnotifyService } from 'ng-snotify';
import { HttpService } from '../providers/http';

declare var $:any;
@Component({
  selector: 'app-como-instalar',
  templateUrl: './como-instalar.component.html',
  styleUrls: ['./como-instalar.component.scss']
})
export class ComoInstalarComponent implements OnInit {

  arComoInstalar = [
    {
      id: 1,
      nome: "TOKEN SAFRAN MORPHO",
      drivers: [
        {
          nome: "Driver Safran Morpho (32 Bits)",
          especificacao: "Driver para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)",
          link: "https://erpdoccloud.com.br/downloads/Driver_Morpho_Win8_32bits.zip"
        },
        {
          nome: "Driver Safran Morpho (64 Bits)",
          especificacao: "Driver para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)",
          link: "https://erpdoccloud.com.br/downloads/Driver_Morpho_Win8_64bits.zip"
        }
      ]
    },
    {
      id: 2,
      nome: "ETOKEN SAFENET",
      drivers: [
        {
          nome: "SafeNet Authentication Client 8.2 (32 Bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, 7 e 8)",
          link: "https://erpdoccloud.com.br/downloads/61d47164c43dc6fa9f3ca946e4e33c48.msi"
        },
        {
          nome: "SafeNet Authentication Client 8.2 (64 Bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, 7 e 8)",
          link: "https://erpdoccloud.com.br/downloads/027be019a9f512e4abf82aa96759e873.msi"
        },
        {
          nome: "SafeNet Authentication Client 8.1",
          especificacao: "Driver para Microsoft Windows de 32 e 64 bits (XP, 2003, 2008, Vista, Seven)",
          link: "https://erpdoccloud.com.br/downloads/4be487476b1b387ce265ef45d2d4d1d6.rar"
        },
        {
          nome: "Mac OS X Snow Leopard e Lion",
          especificacao: "Mac OS X Snow Leopard e Lion",
          link: "https://erpdoccloud.com.br/downloads/142ee6d1cbd7266235fb62a0e9c5b181.zip"
        },
        {
          nome: "SafeNet Authentication Client 8.2 (Mac OS)",
          especificacao: "Driver para Mac OS",
          link: "https://erpdoccloud.com.br/downloads/2a0e2d7dcc7c2c314fb48ae5fe520101.zip"
        }
      ]
    },
    {
      id: 3,
      nome: "ETOKEN GD STARSIGN",
      drivers: [
        {
          nome: "GD Starsign - GD Burti (32 Bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven)",
          link: "https://erpdoccloud.com.br/downloads/395fbe01325a4f664673f0a9cd1be354.exe"
        },
        {
          nome: "GD Starsign - GD Burti (64 Bits)",
          especificacao: "Driver para Microsoft Windows de 64 bits (XP, 2003, 2008, Vista, Seven)",
          link: "https://erpdoccloud.com.br/downloads/2d49cf949c9f4bf33e21c36ec7192bda.exe"
        }
      ]
    },
    {
      id: 4,
      nome: "LEITORA OMNIKEY 3021",
      drivers: [
        {
          nome: "Windows 32 bits (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven)",
          link: "https://erpdoccloud.com.br/downloads/ce3297be8d62093f229722581da30f29.exe"
        },
        {
          nome: "Windows 64 bits (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven)",
          link: "https://erpdoccloud.com.br/downloads/4f0bad5f47a1809ea3c017d7741e4ade.exe"
        },
        {
          nome: "SafeNet Authentication Client 8.1",
          especificacao: "Mac OS X Snow Leopard",
          link: "https://erpdoccloud.com.br/downloads/c98f1545dfd1cdcea48fed7107c2445a.rar"
        }
      ]
    },
    {
      id: 5,
      nome: "LEITORA NONUS",
      drivers: [
        {
          nome: "Windows 8, Windows 7, Vista, XP, 2008, 2003 (32 bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven, 8)",
          link: "https://erpdoccloud.com.br/downloads/201110516312570555.exe"
        },
        {
          nome: "Windows 8, Windows 7, Vista, XP, 2008, 2003 (64 bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven, 8)",
          link: "https://erpdoccloud.com.br/downloads/201110516312553343.exe"
        },
        {
          nome: "Linux 32/64 bits",
          especificacao: "Driver para Linux 32/64 bits",
          link: "https://erpdoccloud.com.br/downloads/2011810151801402.zip"
        },
        {
          nome: "MAC OSX (10.5/10.6/10.7)",
          especificacao: "Driver para MAC OS X (10.5/10.6/10.7)",
          link: "https://erpdoccloud.com.br/downloads/20118101518076073.zip"
        }
      ]
    },
    {
      id: 6,
      nome: "CARTÃO SAFESIGN STANDARD",
      drivers: [
        {
          nome: "Safesign Standard 3.0.93 (32 Bits)",
          especificacao: "Driver do Cartão modelo novo para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)",
          link: "https://erpdoccloud.com.br/downloads/safesign-3.0.93-32bits.msi"
        },
        {
          nome: "Safesign Standard 3.0.93 (64 Bits)",
          especificacao: "Driver do Cartão modelo novo para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)",
          link: "https://erpdoccloud.com.br/downloads/safesign-3.0.93-64bits.msi"
        }
      ]
    },
    {
      id: 7,
      nome: "TEAMVIEWER",
      drivers: [
        {
          nome: "All-In-One: TeamViewer versão completa ( Windows )",
          link: "https://erpdoccloud.com.br/downloads/TeamViewer_Setup.exe"
        },
        {
          nome: "All-In-One: TeamViewer versão completa ( Versão Mac )",
          link: "https://erpdoccloud.com.br/downloads/TeamViewer.dmg"
        },
        {
          nome: "All-In-One: TeamViewer versão completa ( Versão Linux )",
          link: "https://erpdoccloud.com.br/downloads/teamviewer_11.0.93329_i386.tar.xz"
        }
      ]
    },
    {
      id: 8,
      nome: "AWP MANAGER",
      drivers: [
        {
          nome: "Windows (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows x86 (XP, 2003, 2008, Vista, Seven)",
          link: "https://erpdoccloud.com.br/downloads/AWP_Manager_5.1.8_32_bits.exe"
        },
        {
          nome: "Windows (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows x86 (XP, 2003, 2008, Vista, Seven)",
          link: "https://erpdoccloud.com.br/downloads/AWP_Manager_5.1.8_64_bits.exe"
        }
      ]
    }
  ]

  idSolucao: any;
  model: any = {};

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService,
    private snotifyService: SnotifyService,
    private HttpService: HttpService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Como instalar os drivers');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
  }

  enviarEmail(form) {
    console.log(form.value);
    form.value['Assunto'] = "Contato Via Site - Dúvidas Sobre Instalação";
    const successAction = Observable.create(observer => {
      observer.next({
        body: 'Enviando Mensagem.....',
      });
      this.HttpService.JSON_POST('/send/mail', form.value, true, false)
      .then(
        (res) => {
          console.log(res.json());
          setTimeout(() => {
            observer.next({
              title: 'Obrigado',
              body: 'Em breve entraremos em contato!!',
              config: {
                closeOnClick: true,
                timeout: 3000,
                showProgressBar: true
              }
            });
            observer.complete();
          }, 3000);
          form.reset();
        },
        (error) => {
          console.log(error);
          //this.AlertService.alertError(JSON.parse(error._body));
        }
      )
    });
    this.snotifyService.async('Sucesso!', successAction);
  }

}
