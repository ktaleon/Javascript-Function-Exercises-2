human_years = int(input())
add_human_years = (human_years - 2) * 4
FIRST2 = 10.5
dog_years = 2 * 10.5 + add_human_years

if human_years <= 2:
    print(float(human_years * FIRST2))

elif human_years > 2:
    print(int(dog_years))