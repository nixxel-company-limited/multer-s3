import type { StorageEngine } from 'multer'

type Request = any
type File = any

type Callback<T> = (error: any, value?: T) => void

type ContentTypeFunction = (req: Request, file: File, cb: (error: any, mime?: string, stream?: any) => void) => void

type FileParamFunction<T> = (req: Request, file: File, cb: Callback<T>) => void

export interface MulterS3Options {
  s3: any
  bucket: string | FileParamFunction<string>
  key?: FileParamFunction<string>
  acl?: string | FileParamFunction<string>
  contentType?: ContentTypeFunction
  metadata?: FileParamFunction<Record<string, string> | undefined>
  cacheControl?: string | FileParamFunction<string | null>
  contentDisposition?: string | FileParamFunction<string | null>
  contentEncoding?: string | FileParamFunction<string | null>
  storageClass?: string | FileParamFunction<string>
  serverSideEncryption?: string | FileParamFunction<string | null>
  sseKmsKeyId?: string | FileParamFunction<string | null>
}

declare function multerS3 (options: MulterS3Options): StorageEngine

declare const AUTO_CONTENT_TYPE: ContentTypeFunction

declare const DEFAULT_CONTENT_TYPE: ContentTypeFunction

export default multerS3
export { AUTO_CONTENT_TYPE, DEFAULT_CONTENT_TYPE }
