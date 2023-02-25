#importing modules
import pytesseract as pyTesseract, numpy as np
from PIL import Image 
 
# If you don't have tesseract executable in your PATH, include the following:
pyTesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

filename = r'TestImages\1_python-ocr.jpg' 
img1 = np.array(Image.open(filename))
text = pyTesseract.image_to_string(img1)

# import cv2norm_img = np.zeros((img.shape[0], img.shape[1]))
# img = cv2.normalize(img, norm_img, 0, 255, cv2.NORM_MINMAX)
# img = cv2.threshold(img, 100, 255, cv2.THRESH_BINARY)[1]
# img = cv2.GaussianBlur(img, (1, 1), 0)

#converting image to text
# print(pyTesseract.image_to_string(Image.open('image.jpg')))
print(text)