import googlemaps # pip install googlemaps
import pandas as pd # pip install pandas

def miles_to_meters(miles):
    try:
        return miles * 1_609.344
    except:
        return 0
    
API_KEY = ''
#API_KEY = open('API_KEY.txt', 'r').read()
map_client = googlemaps.Client(API_KEY)

# enter the user's address here
location = () 
# change the search string according to user's input
search_string = 'restaurant' 
# ask the user's for the distance they want to find
distance = miles_to_meters() 
restaurant_list =[]

response = map_client.places_nearby(
    location=location,
    keyword=search_string,
    name='restaurant',
    radius=distance
)

restaurant_list.extend(response.get('results'))
next_page_token = response.get('next_page_token')

while next_page_token:
    time.sleep(2)
    response = map_client.places_nearby(
        location=location,
        keyword=search_string,
        name='restaurant',
        radius=distance,
        page_token=next_page_token
    )
    restaurant_list.extend(response.get('results'))
    next_page_token = response.get('next_page_token')

df = pd.DataFrame(restaurant_list)
df['url'] = 'https://www.google.com/maps/place/?q=place_id:' + df['place_id']
