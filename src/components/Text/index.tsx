import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import classNames from 'classnames'
import { Theme, useTheme } from '@/contexts/Theme'
import './index.less'

type ElementRefTypes = HTMLParagraphElement & HTMLSpanElement & HTMLHeadingElement
type ElementTypes = Extract<keyof JSX.IntrinsicElements, 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
type TypeStyleVariants =
  'display' |
  'title1' |
  'title2' |
  'title3' |
  'subtitle1' |
  'subtitle2' |
  'subtitle3' |
  'body' |
  'body-medium' |
  'footnote' |
  'eyebrow'

type FontTypes = 'clarkson' | 'clarkson-serif'

type TextProps = ComponentPropsWithoutRef<ElementTypes> & {
  variant: TypeStyleVariants;
  font?: FontTypes;
  as?: ElementTypes;
  className?: string;
  children: React.ReactNode;
}

type StyledTextProps = Omit<TextProps, 'variant'>

const Text = forwardRef<ElementRefTypes, TextProps>( function Text({
  variant,
  font = 'clarkson',
  as: IntrinsicElement = 'p',
  className,
  children,
  ...rest
}, ref ) {
  const theme = useTheme()

  return (
    <IntrinsicElement
      ref={ref}
      className={classNames(
        'text',
        `text--${ variant }`,
        theme !== Theme.DARK && `text--${ theme }`,
        className,
        { 'text--font-clarkson-serif': font === 'clarkson-serif' }
      )}
      {...rest}
    >
      {children}
    </IntrinsicElement>
  )
})

const Display = forwardRef<ElementRefTypes, StyledTextProps>( function Display( props, ref ) {
  return <Text variant="display" ref={ref} {...props} />
})

const Title1 = forwardRef<ElementRefTypes, StyledTextProps>( function Title1( props, ref ) {
  return <Text variant="title1" ref={ref} {...props} />
})

const Title2 = forwardRef<ElementRefTypes, StyledTextProps>( function Title2( props, ref ) {
  return <Text variant="title2" ref={ref} {...props} />
})

const Title3 = forwardRef<ElementRefTypes, StyledTextProps>( function Title3( props, ref ) {
  return <Text variant="title3" ref={ref} {...props} />
})

const Subtitle1 = forwardRef<ElementRefTypes, StyledTextProps>( function Subtitle1( props, ref ) {
  return <Text variant="subtitle1" ref={ref} {...props} />
})

const Subtitle2 = forwardRef<ElementRefTypes, StyledTextProps>( function Subtitle2( props, ref ) {
  return <Text variant="subtitle2" ref={ref} {...props} />
})

const Subtitle3 = forwardRef<ElementRefTypes, StyledTextProps>( function Subtitle3( props, ref ) {
  return <Text variant="subtitle3" ref={ref} {...props} />
})

const Body = forwardRef<ElementRefTypes, StyledTextProps>( function Body( props, ref ) {
  return <Text variant="body" ref={ref} {...props} />
})

const BodyMedium = forwardRef<ElementRefTypes, StyledTextProps>( function BodyMedium( props, ref ) {
  return <Text variant="body-medium" ref={ref} {...props} />
})

const Footnote = forwardRef<ElementRefTypes, StyledTextProps>( function Footnote( props, ref ) {
  return <Text variant="footnote" ref={ref} {...props} />
})

const Eyebrow = forwardRef<ElementRefTypes, StyledTextProps>( function Eyebrow( props, ref ) {
  return <Text variant="eyebrow" ref={ref} {...props} />
})

export default {
  Display,
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Body,
  BodyMedium,
  Footnote,
  Eyebrow,
}
