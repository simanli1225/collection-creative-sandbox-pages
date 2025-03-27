import React, { ComponentPropsWithRef, forwardRef, useState } from 'react'
import classNames from 'classnames'
import { trackClickLink } from '@/utils/track-events'
import { useTheme, Theme } from '@/contexts/Theme'
import useTemplateHref from './useTemplateHref'
import innerText from 'react-innertext'
import './index.less'

export type ElementRefTypes = HTMLAnchorElement & HTMLButtonElement
type ElementTypes = Extract<keyof JSX.IntrinsicElements, 'a' | 'button'>
type CtaStyleVariants = 'primary' | 'secondary' | 'tertiary' | 'inline'

type CtaProps = ComponentPropsWithRef<'button'> & ComponentPropsWithRef<'a'> & {
  as?: ElementTypes;
  variant: CtaStyleVariants;
  analyticsId?: string;
  hasArrow?: boolean;
  hasInlineUnderline?: boolean;
  shouldSwapTemplateHref?: boolean;
}

type StyledCtaProps = Omit<CtaProps, 'variant'>

const Cta = forwardRef<ElementRefTypes, CtaProps>( function Cta({
  variant,
  as: IntrinsicElement = 'a',
  className,
  href,
  target,
  rel,
  onClick,
  analyticsId,
  hasArrow,
  hasInlineUnderline,
  shouldSwapTemplateHref = true,
  children,
  ...rest
}, ref ) {
  const theme = useTheme()
  const swappedHref = useTemplateHref( href, shouldSwapTemplateHref )

  const [ hasBeenHovered, setHasBeenHovered ] = useState<boolean>( false )

  function handleClick( event: React.MouseEvent<ElementRefTypes> ) {
    if ( onClick ) {
      onClick( event )
    }

    trackClickLink( href, innerText( children ), analyticsId )
  }

  return (
    <IntrinsicElement
      ref={ref}
      className={classNames(
        'cta',
        `cta--${ variant }`,
        {
          [ `cta--${ theme }` ]: theme !== Theme.DARK,
          'cta--has-arrow': hasArrow,
          'cta--has-inline-underline': hasInlineUnderline,
          'cta--underline-hover': hasBeenHovered,
        },
        className
      )}
      href={swappedHref}
      target={target}
      rel={rel}
      onClick={handleClick}
      onMouseEnter={() => {
        if ( variant === 'tertiary' || hasInlineUnderline ) {
          setHasBeenHovered( true )
        }
      }}
      {...rest}
    >
      {children}
      {hasArrow && <span data-arrow="true" aria-hidden="true">→</span>}
    </IntrinsicElement>
  )
})

const Primary = forwardRef<ElementRefTypes, StyledCtaProps>( function Primary( props, ref ) {
  return <Cta variant="primary" ref={ref} {...props} />
})

const Secondary = forwardRef<ElementRefTypes, StyledCtaProps>( function Secondary( props, ref ) {
  return <Cta variant="secondary" ref={ref} {...props} />
})

const Tertiary = forwardRef<ElementRefTypes, StyledCtaProps>( function Tertiary( props, ref ) {
  return <Cta variant="tertiary" ref={ref} {...props} hasArrow={true} />
})

const Inline = forwardRef<ElementRefTypes, StyledCtaProps>( function Inline( props, ref ) {
  return <Cta variant="inline" ref={ref} {...props} />
})

export default {
  Primary,
  Secondary,
  Tertiary,
  Inline,
}
