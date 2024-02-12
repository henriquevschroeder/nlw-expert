import os
from barcode import Code128
from barcode.writer import ImageWriter

class BarcodeHandler:
    def create_barcode(self, product_code: str) -> str:
        tag = Code128(product_code, writer=ImageWriter())
        path_from_tag = f'tmp/{product_code}'

        if not os.path.exists('tmp'):
            os.makedirs('tmp')

        tag.save(path_from_tag)

        return path_from_tag
