import React, { useState, useEffect } from 'react'
import style from './PhotographerMenu.less'

type HoverEffectProps = React.HTMLAttributes<HTMLDivElement>

const HoverEffect: React.FC<HoverEffectProps> = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const items = [
    {
      name: 'Sabiha Çimen',
      url: '/sabiha-cimen',
      image:
        'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/magnum/hoverMenu/SabihaCimen-Home-Nav-Hover.jpg',
    },
    {
      name: 'Jacob Aue Sobol',
      url: '/jacob-aue-sobol',
      image:
        'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/magnum/hoverMenu/JacobAueSobol-Home-Nav-Hover.jpg',
    },
    {
      name: 'Olivia Arthur',
      url: '/olivia-arthur',
      image:
        'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/magnum/hoverMenu/OliviaArthur-Home-Nav-Hover.jpg',
    },
    {
      name: 'Bruce Gilden',
      url: '/bruce-gilden',
      image:
        'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/magnum/hoverMenu/BruceGilden-Home-Nav-Hover.jpg',
    },
    {
      name: 'William Keo',
      url: '/william-keo',
      image:
        'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/magnum/hoverMenu/WilliamKeo-Home-Nav-Hover.jpg',
    },
    {
      name: 'Steve McCurry',
      url: '/steve-mcCurry',
      image:
        'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/magnum/hoverMenu/SteveMcCurry-Home-Nav-Hover.jpg',
    },
  ]

  const defaultImage =
    'https://images.squarespace-cdn.com/content/64ff65b6f8197b243d3c8ee2/753c1764-fe1d-402e-9224-5e2b8a3260e9/Photographer-List-Default.jpg?content-type=image%2Fjpeg'

  // 预加载图片
  useEffect(() => {
    const imageUrls = items.map((item) => item.image).concat(defaultImage)
    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [])

  return (
    <section
      {...props}
      className={`${style['hover-effect-container']} ${props.className || ''}`}
      style={{
        backgroundImage: `url(${
          hoveredIndex !== null ? items[hoveredIndex].image : defaultImage
        })`,
        ...props.style,
      }}
    >
      <div className={style['links-container']}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className={hoveredIndex === index ? style.active : ''}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default HoverEffect
