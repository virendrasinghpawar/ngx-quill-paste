# ngx-quill-paste


Workaround for Quill editor

Issue – in  Quill.js flickers when you paste.

See github issue : https://github.com/quilljs/quill/issues/1374


Usage

# in your project root
npm i ngx-quill-paste
// in your app – import and register the module
import PasteClipboard from 'ngx-quill-paste'

Quill.register('modules/clipboard', PasteClipboard);