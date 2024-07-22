import {
  closeDialog,
  selectFuseDialogState,
} from "@fuse/core/FuseDialog/fuseDialogSlice";
import { DialogActions, DialogContent, Button, Dialog } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { RootState } from "app/store/store";
import { useAppDispatch } from "app/store/hooks";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const fetchMarkdown = async () => {
  const respone = await fetch("src/app/main/employee/vactions/tabs/count/dialog/VacationsInfo.md");
  const text = await respone.text();
  return text;
};

export const VacationsDialog = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const dispatch = useAppDispatch();
  const isOpen = useSelector((state: RootState) =>
    selectFuseDialogState(state)
  );

  useEffect(() => {
    const loadMarkdown = async () => {
      const md = await fetchMarkdown();
      setMarkdown(md);
    };

    if (isOpen) {
      loadMarkdown();
    }
  }, [isOpen]);

  return (
    <Fragment>
      <Dialog open={isOpen} scroll={"paper"} maxWidth="lg" fullWidth={true}>
        <DialogContent>
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => dispatch(closeDialog())}
          >
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
