import { memo } from "react";
import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
   Box,
} from "@chakra-ui/react";

export function AccordionDescription() {
   return (
      <section>
         <Accordion defaultIndex={[0]} allowMultiple color={"pink.10"}>
            <AccordionItem>
               <h2>
                  <AccordionButton
                     _expanded={{ bg: "pink.10", color: "white" }}
                  >
                     <Box flex="1" textAlign="left">
                        Luminosidade
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  O local ideal para a maioria das orquídeas é ter bastante luz
                  sem sol direto com boa ventilação, o local tem que ser
                  agradável pra você ficar.
               </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
               <h2>
                  <AccordionButton
                     _expanded={{ bg: "pink.10", color: "white" }}
                  >
                     <Box flex="1" textAlign="left">
                        Adubação
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  Temos para as orquídeas adubos químicos e orgânicos. O maior
                  erro é utilizar adubos foliares na regas dos vasos, adubos
                  foliares são para folhas. O adubo N P K(nitrogênio, fósforo,
                  potássio) 20-20-20 ( manutenção ) pode ser usado sem medo
                  alternando com o NPK 15-30-15 a cada duas semanas, chamado
                  adubo de floração Assim como adubo orgânico (bokashi) deve ser
                  colocado em apenas um cantinho do vaso nuncas nas raízes,
                  Aplicar os adubos sempre de manhã ou final da tarde, Sempre
                  faça dosagem indicada no produto, pois dosagens maiores
                  funcionam como veneno para orquídeas.
                  <i>
                     {" "}
                     O adubo orgânico pode ser usado uma vez por mês nunca
                     coloque nas raízes
                  </i>
                  .
               </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
               <h2>
                  <AccordionButton
                     _expanded={{ bg: "pink.10", color: "white" }}
                  >
                     <Box flex="1" textAlign="left">
                        Alguns Erros Mais Comum
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  As orquídeas devem ter um tom verde claro nas folhas. Folhas
                  verde escuro e aparentemente saudável, estão com falta de luz.
                  Folhas verde amareladas estão com excesso de luz. A orquídea
                  não floriu? Pode ser muita rega no inverno,
                  <i>
                     {" "}
                     Nunca utilizar pratinho embaixo dos vasos de orquídeas.
                  </i>
                  Não exponha sua orquídea ao sol direto, Esterilize suas
                  ferramentas após usar em uma orquídeas, você pode levar
                  doenças de uma para outra.Não mate sua orquídea com excesso de
                  água deixe o substrato secar entre uma rega e outra.
               </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
               <h2>
                  <AccordionButton
                     _expanded={{ bg: "pink.10", color: "white" }}
                  >
                     <Box flex="1" textAlign="left">
                        Regras Básicas para o planto
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  <span>
                     A maioria das orquídeas podem ser plantadas em vasos de
                     barro ou plástico de tamanho um pouco maior que a planta,
                     não use vasos grandes e jamais use TERRA ( apenas em
                     orquídeas terrestre ). Vaso de barro com muitos furos são
                     os ideais para o cultivo de orquídeas. É aconselhável
                     replantar as orquídeas a pelo menos 2 anos. em virtude da
                     decomposição ou deterioração do substrato.
                  </span>
                  <h3>Substratos mais usados:</h3>
                  <span>
                     Casca de pinus, carvão, casca de macadâmia, esfagno,
                     isopor, casca ou tronquinho de madeira, brita etc. As
                     raízes necessitam de AREJAMENTO.
                  </span>
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
      </section>
   );
}

export default memo(AccordionDescription);
