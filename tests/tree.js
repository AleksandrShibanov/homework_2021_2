'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});
	
	QUnit.test('Елочек с нецелочисленной высотой не бывает', function (assert) {
	  assert.strictEqual(tree(4.56), null);
	  assert.strictEqual(tree("4.56"), null);
	  assert.strictEqual(tree("adjgdapgkfe"), null);
	  assert.strictEqual(tree("уплщпущаул"), null);
	  assert.strictEqual(tree({name: "Aleksandr"}), null);
	  assert.strictEqual(tree({}), null);
	  assert.strictEqual(tree([]), null);
	  assert.strictEqual(tree(''), null);
	  assert.strictEqual(tree(null), null);
	  assert.strictEqual(tree(undefined), null);
	  assert.strictEqual(tree(NaN), null);
	  assert.strictEqual(tree(Infinity), null);
	  assert.strictEqual(tree([1, 35, "age"]), null);
	});
	
	
	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});
	
	QUnit.test('Ёлочка высотой 11', function (assert) {
		const expected =
			'         *         \n' +
			'        ***        \n' +
			'       *****       \n' +
			'      *******      \n' +
			'     *********     \n' +
			'    ***********    \n' +
			'   *************   \n' +
			'  ***************  \n' +
			' ***************** \n' +
			'*******************\n' +
			'         |         \n';
		assert.strictEqual(tree(11), expected);
		assert.strictEqual(tree('11'), expected);
	});
});

