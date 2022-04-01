const itActsAsFavoriteModel = (favorite) => {
  it('Should return restaurant that has been added', async () => {
    favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    favorite.putResto({ id: 's1knt6za9kkfw1e867' });

    expect(await favorite.getFavorite('rqdv5juczeskfw1e867')).toEqual({ id: 'rqdv5juczeskfw1e867' });
    expect(await favorite.getFavorite('s1knt6za9kkfw1e867')).toEqual({ id: 's1knt6za9kkfw1e867' });
    expect(await favorite.getFavorite('qwertyuiopasdfghjkl')).toEqual(undefined);
  });

  it('Should refuse restaurant from being added if it does not have correct property', async () => {
    favorite.putResto({ awesome: 'awesome' });
    expect(await favorite.getAllFavorite()).toEqual([]);
  });

  it('Can return all of the restaurant favorites that have been added', async () => {
    favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    favorite.putResto({ id: 's1knt6za9kkfw1e867' });

    expect(await favorite.getAllFavorite())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    const sorter = (a, b) => a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1;
    await favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    await favorite.putResto({ id: 's1knt6za9kkfw1e867' });
    await favorite.putResto({ id: 'abcdefghijklmnopq' });

    favorite.deleteResto('rqdv5juczeskfw1e867');

    const result = [
      { id: 's1knt6za9kkfw1e867' },
      { id: 'abcdefghijklmnopq' },
    ];

    expect((await favorite.getAllFavorite()).sort(sorter))
      .toEqual(result.sort(sorter));
  });

  it('should handle request to remove a restaurant even though the resto has not been added', async () => {
    const sorter = (a, b) => a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1;
    favorite.putResto({ id: 'rqdv5juczeskfw1e867' });
    favorite.putResto({ id: 's1knt6za9kkfw1e867' });
    favorite.putResto({ id: 'abcdefghijklmnopq' });

    favorite.deleteResto('abcdefghijklmnopq123');

    const result = [
      { id: 'abcdefghijklmnopq' },
      { id: 'rqdv5juczeskfw1e867' },
      { id: 's1knt6za9kkfw1e867' },
    ];

    expect((await favorite.getAllFavorite()).sort(sorter))
      .toEqual(result.sort(sorter));
  });
};

export default itActsAsFavoriteModel;
