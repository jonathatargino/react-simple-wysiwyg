import React, { type ForwardedRef } from 'react';
import { Editor, EditorProps } from './Editor';
import { EditorProvider } from './EditorContext';
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Separator,
  Toolbar,
} from '../toolbar';

export const DefaultEditor = React.forwardRef(function DefaultEditor(
  props: EditorProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <EditorProvider>
      <Editor {...props} ref={ref}>
        {props.children || (
          <Toolbar>
            <BtnStyles />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <Separator />
          </Toolbar>
        )}
      </Editor>
    </EditorProvider>
  );
});
