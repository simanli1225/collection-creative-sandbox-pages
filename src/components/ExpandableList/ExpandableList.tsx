import React, { useState } from 'react'
import style from './ExpandableList.less'

interface ExpandableListProps {
  title: string;
  items: string[];
}
const attributionItems = [
  'PHOTOGRAPHS COURTESY OF',
  'Fondation Beyeler',
  'Laurent Lecat',
  'The Brant Foundation, Greenwich, CT',
  'Associated Press',
  'Michael JN Bowles',
  'Robert Cummerow, Madhouse Creative, LLC',
  'The Broad Art Foundation',
  'Douglas M. Parker Studios, Los Angeles',
  'Tom Powell Imaging',
  'Bernardaud',
  'Sotheby’s, Inc. © 2019',
  'Liebieghaus Skulpturensammlung (Exhibition view “Jeff Koons. The Painter & The Sculptor” at the Liebieghaus Skulpturensammlung, Frankfurt am Main, 2012, Photo: Liebieghaus Skulpturensammlung – Alexander Paul Englert',
]

const ExpandableList: React.FC<ExpandableListProps> = ({ title, items }) => {
  const [expanded, setExpanded] = useState(false)
  const toggleExpand = () => setExpanded(!expanded)

  return (
    <div className={style['expandable-list']}>
      <div
        className={style['expandable-list-header']}
        onClick={toggleExpand}
        role="button"
        aria-expanded={expanded}
      >
        <span>{title}</span>
        <div className={style['accordion-icon-container']}>
          <div className={style.plus}>
            <div className={style['plus__horizontal-line']}></div>
            <div
              className={`${style['plus__vertical-line']} ${
                expanded ? style.rotate : ''
              }`}
            ></div>
          </div>
        </div>
      </div>
      <ul
        className={`${style['expandable-list-content']} ${
          expanded ? style.expanded : ''
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExpandableList
