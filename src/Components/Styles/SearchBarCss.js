import { StyleSheet } from 'react-native';

const SearchBarCss = StyleSheet.create({
    searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    justifyContent: 'space-between',
    marginTop:10,
    paddingHorizontal:15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    height: 45,
    paddingHorizontal: 10,
    flex: 1,
  },
  searchIcon: {
    marginRight: 8,
    width:20, 
    height:20,
    tintColor:'#ccc'
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',

  },
})
export default SearchBarCss;