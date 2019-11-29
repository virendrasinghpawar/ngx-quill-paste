import Quill from 'quill';
import Delta from 'quill-delta';

const Clipboard = Quill.import('modules/clipboard');

export default class PasteClipboard extends Clipboard {
    onPaste(e) {
        if (e.defaultPrevented || !this.quill.isEnabled()) return;
        let range = this.quill.getSelection();
        let delta = new Delta().retain(range.index);
        if (e && e.clipboardData && e.clipboardData.types && e.clipboardData.getData) {
            let text = (e.originalEvent || e).clipboardData.getData('text/html');
            let cleanedText = this.convert(text);
            e.stopPropagation();
            e.preventDefault();
            delta = delta.concat(cleanedText).delete(range.length);
            this.quill.updateContents(delta, Quill.sources.USER);
            this.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT);
            return false;
        }
    }
  }
  