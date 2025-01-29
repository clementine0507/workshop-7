# workshop 2
walker
## My URL
https://clementine0507.github.io/workshop-7/
### Selina's URL
https://mzhu933.github.io/workshop2/
#### Notes
![f9ab5430e1b604ce127bf47f1e4b500c_](https://github.com/user-attachments/assets/e16398d8-e61e-4a30-9d98-dfda43fd337e)

![f9ab5430e1b604ce127bf47f1e4b500c_](https://github.com/user-attachments/assets/0a72d2a0-a542-4f58-a046-7fdf27186763)

example 1.0

![0b9e575235d4cbadcde280b9ac2c505a_](https://github.com/user-attachments/assets/7361aa0c-e3d3-4e08-b8f9-594e8d8da34e)

2.0 adds two ball animations and adds the ability to control the ball again.

![5cad376e17683e820796272574a10fb7_](https://github.com/user-attachments/assets/9d607708-8eb9-4b3b-b935-9b4394a0938d)

![167825b0ca05e384b88ba78abffe58d5_](https://github.com/user-attachments/assets/2b076cf7-9c12-49a3-ace3-8da879fc5840)

Add the number, path, and color of balls.

![30029b0eb3bb7d8625cd38b23304ee30_](https://github.com/user-attachments/assets/71871e39-9500-452f-ab0f-0cb70759000c)

![a61e009ea657087b0500b9e11a486a90_](https://github.com/user-attachments/assets/cd1d5c7f-a422-4257-bba4-8afed1f6dcdc)

![a61e009ea657087b0500b9e11a486a90_](https://github.com/user-attachments/assets/2517f085-2d6a-495d-93fe-09d60c67607f)

![c101a533f409c9f5d484ba675a422885_](https://github.com/user-attachments/assets/6035b5d1-3b3a-4bdc-a72f-523983d66643)

##### Processing
move-circles 1.0

![image](https://github.com/user-attachments/assets/36ab682a-b85c-4709-9cf8-2cf2938b79ac)

Turn circles into stars 2.0

I tried to change the circle into a different shape and decided to go for a more complex one. So, I searched for "star" on a reference website, but didn't find any relevant results. Then, I asked ChatGPT how to draw a star in p5.js.

![image](https://github.com/user-attachments/assets/2b93d5b5-e78c-4527-81c8-92e6caab893d)

![image](https://github.com/user-attachments/assets/f43bbe9f-f4b8-4898-b400-60ab119cf5ea)

![image](https://github.com/user-attachments/assets/c0d2cdd5-423a-4d84-84cc-8d1319929a53)

![image](https://github.com/user-attachments/assets/4a9aab62-6359-475a-ba5f-03ef34dd3d6d)

I replaced the ellipse in the code with the star function in the format given by chatgpt and surprise surprise it works fine.

![image](https://github.com/user-attachments/assets/e0a698ac-8a1c-41bc-a557-18f87e02d868)

3.0 I wanted stars of different sizes, so I changed all radius1 and radius2 in the drawStar function to random. but the resulting image is no longer a star, and I can't see the shape of it.

![7f7ab5eea1798f4c65b574b4b63bfff](https://github.com/user-attachments/assets/744300dd-a18c-45fb-b140-167f85204b4a)

![image](https://github.com/user-attachments/assets/a7254b5e-ede4-4299-82b7-68fc166b8c37)

Then I checked and realized that I hadn't given the random numbers a range, so I added a for loop to give the shape of the pentagram a range of random numbers.

![970c9c8fd7f2b80d9d9ed90a9125351](https://github.com/user-attachments/assets/cae0b64f-dc2b-478c-90f6-3807a7cead0a)
