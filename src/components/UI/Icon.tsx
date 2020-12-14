import React from 'react'
import BOWAIcon from '../../assets/icons/BOWA.svg'
import MedicalIcon from '../../assets/icons/medical.svg'

import bgSVG1_1 from '../../assets/icons/FirstScreenBG/Ellipse-46bg.svg'
import bgSVG1_2 from '../../assets/icons/FirstScreenBG/Ellipse-47bg.svg'
import bgSVG1_3 from '../../assets/icons/FirstScreenBG/Vectorbg-1.svg'
import bgSVG1_4 from '../../assets/icons/FirstScreenBG/Vectorbg-2.svg'

import bgSVG2_1 from '../../assets/icons/SecondScreenBG/Ellipse-46bg.svg'
import bgSVG2_2 from '../../assets/icons/SecondScreenBG/Ellipse-47bg.svg'
import bgSVG2_3 from '../../assets/icons/SecondScreenBG/Vector.svg'

import bgSVG3_1 from '../../assets/icons/ThirdScreenBG/Union.svg'
import bgSVG3_2 from '../../assets/icons/ThirdScreenBG/Vector.svg'

import arrow from '../../assets/icons/arrow.svg'
import MenuElementSVG1 from '../../assets/icons/Menu/MenuElementSVG1.svg'
import MenuElementSVG2 from '../../assets/icons/Menu/MenuElementSVG2.svg'
import MenuElementSVG3 from '../../assets/icons/Menu/MenuElementSVG3.svg'
import MenuElementSVG4 from '../../assets/icons/Menu/MenuElementSVG4.svg'
import MenuElementSVG5 from '../../assets/icons/Menu/MenuElementSVG5.svg'
import MenuElementSVG6 from '../../assets/icons/Menu/MenuElementSVG6.svg'
import MenuElementSVG7 from '../../assets/icons/Menu/MenuElementSVG7.svg'


const Icons = {
 BOWA: BOWAIcon,
 medical: MedicalIcon,
 arrow: arrow,
 bgSVG1_1: bgSVG1_1,
 bgSVG1_2: bgSVG1_2,
 bgSVG1_3: bgSVG1_3,
 bgSVG1_4: bgSVG1_4,
 bgSVG2_1: bgSVG2_1,
 bgSVG2_2: bgSVG2_2,
 bgSVG2_3: bgSVG2_3,
 bgSVG3_1: bgSVG3_1,
 bgSVG3_2: bgSVG3_2,
 MenuSVG1: MenuElementSVG1,
 MenuSVG2: MenuElementSVG2,
 MenuSVG3: MenuElementSVG3,
 MenuSVG4: MenuElementSVG4,
 MenuSVG5: MenuElementSVG5,
 MenuSVG6: MenuElementSVG6,
 MenuSVG7: MenuElementSVG7

}

export type IconName = keyof typeof Icons

type IconProps = {
  name: IconName,
  width?: number
}


const Icon = ({ name, width }: IconProps) => {
  const SelectedIcon = Icons[name]

  return <SelectedIcon width={width}/>
}

export default Icon