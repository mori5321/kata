import React from "react";
import { css, cx } from "emotion";
import { Template } from "../../../domain/entities/template";
import { Link } from "rocon/react";
import { toplevelRoutes } from "@/router/route";
import { plainLinkStyle } from "@/router/linkStyle";
import DeleteIcon from "assets/icons/delete.svg";
import { Padding } from "@/components/commons/Padding";
import { CopyIconButton } from "@/components/commons/Buttons/IconButtons";
import LeftArrowIcon from "assets/icons/leftArrow.svg";
import { basicColorSet } from "@/consts/colors";

type Props = {
  template: Template;
  onChangeTitle: (title: string) => void;
  onChangeBody: (body: string) => void;
};

const TemplateDetailLayout: React.FC<Props> = ({
  template,
  onChangeTitle,
  onChangeBody,
}) => {
  const [composing, setComposing] = React.useState<boolean>(false);
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement | null>(null);

  const handleKeyPressOnTitle = (e: React.KeyboardEvent) => {
    if (composing) return;
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      bodyRef.current?.focus();
    }
  };

  const handleKeyDownCaptureOnBodyTextArea = (e: React.KeyboardEvent) => {
    const selectionEnd = bodyRef.current?.selectionEnd ?? 0;
    if (e.key === "ArrowUp") {
      const currentLinePosition = getCursorLinePosition(
        selectionEnd,
        template.body
      );
      if (currentLinePosition > 1) return;
      e.preventDefault();
      titleRef.current?.focus();
    }
    if (template.body.length > 0) return;
    if (e.key === "Backspace") {
      e.preventDefault();
      titleRef.current?.focus();
    }
  };

  // TODO: Refactor
  // TODO: 現在の行内での位置も取得したい
  const getCursorLinePosition = (selectionEnd: number, text: string) => {
    const lines = text.split("\n");
    const charCountPerLine = lines.map((line) => line.length + 1);
    if (charCountPerLine.length > 0 && charCountPerLine[0] > 0) {
      charCountPerLine[0] -= 1;
    }
    let linePosition = 0;
    let sum = 0;
    for (let i = 0; i < charCountPerLine.length; i++) {
      sum += charCountPerLine[i];
      if (selectionEnd <= sum) {
        linePosition = i + 1;
        break;
      }
    }
    return linePosition;
  };

  return (
    <>
      <div className={wrapperStyle}>
        <div className={subHeaderStyle}>
          <Link
            route={toplevelRoutes.exactRoute}
            className={cx(plainLinkStyle, backLinkStyle)}
          >
            <img src={LeftArrowIcon} width="16px" height="16px" />
            <Padding right={4} />
            Back
          </Link>
          <div className={toolFieldStyles}>
            <img src={DeleteIcon} width="32px" height="32px" />
            <Padding left={8} />
            <CopyIconButton onClick={() => alert("Copy")} />
          </div>
        </div>
        <div className={contentStyle}>
          <Title
            title={template.title}
            onChange={onChangeTitle}
            ref={titleRef}
            handleKeyPress={handleKeyPressOnTitle}
            onCompositionStart={(_) => {
              setComposing(true);
            }}
            onCompositionEnd={(_) => {
              setComposing(false);
            }}
          />
          <Padding top={16} />
          <textarea
            ref={bodyRef}
            className={bodyStyle}
            value={template.body}
            placeholder="Body here..."
            onChange={(e) => {
              onChangeBody(e.target.value);
            }}
            onKeyDownCapture={handleKeyDownCaptureOnBodyTextArea}
          />
        </div>
      </div>
    </>
  );
};

const wrapperStyle = css`
  padding: 8px 24px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const subHeaderStyle = css`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const contentStyle = css`
  padding: 24px 0;
  display: block;
  height: 100%;
`;

const toolFieldStyles = css`
  display: flex;
  align-items: center;
`;

const backLinkStyle = css`
  display: flex;
  align-items: center;
  color: ${basicColorSet.textSecondary}
  font-weight: bold;
`;

type TitleProps = {
  title: string;
  onChange: (title: string) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  onCompositionStart: (e: React.CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd: (e: React.CompositionEvent<HTMLInputElement>) => void;
};
const Title = React.forwardRef((props: TitleProps, ref) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      if (!inputRef.current) return;
      inputRef.current.focus();
    },
  }));

  return (
    <input
      ref={inputRef}
      className={titleStyle}
      value={props.title}
      placeholder="Untitled"
      onChange={(e) => props.onChange(e.target.value)}
      onKeyDownCapture={props.handleKeyPress}
      onCompositionStart={props.onCompositionStart}
      onCompositionEnd={props.onCompositionEnd}
    />
  );
});

const titleStyle = css`
  color: ${basicColorSet.textPrimary};
  outline: none;
  :focus {
    outline: none;
  }
  border: none;
  background-color: transparent;
  font-size: 40px;
  font-weight: bold;
  width: 100%;
`;

const bodyStyle = css`
  width: 100%;
  height: 100%;
  display: block;
  border: none;
  outline: none;
  :focus {
    outline: none;
  }
  font-size: 24px;
  // resize: none;
  background-color: transparent;
  color: ${basicColorSet.textPrimary};
`;

export { TemplateDetailLayout };
